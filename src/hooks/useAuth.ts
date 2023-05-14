import { useCallback, useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  type LoggedUserData,
  type SaveLoggedUserParams
} from 'src/interfaces/interfaces'
import { AuthContext } from 'src/providers/Auth'

const AUTH_USER_PREFIX = '@USER_'

export function useAuth () {
  const context = useContext(AuthContext)
  const [save, setSave] = useState({
    success: false,
    error: false,
    isLoading: false
  })

  const getUser = useCallback(async (email: string) => {
    try {
      const data = await AsyncStorage.getItem(`${AUTH_USER_PREFIX}${email}`)
      if (data == null) {
        throw Error()
      }
      return JSON.parse(data) as LoggedUserData
    } catch (error) {
      return undefined
    }
  }, [])

  const saveUser = useCallback(
    async (params: SaveLoggedUserParams) => {
      try {
        const key = `${AUTH_USER_PREFIX}${params.email}`
        await AsyncStorage.setItem(key, JSON.stringify(params))
        setSave({ success: true, error: false, isLoading: false })
      } catch (error) {
        setSave({ success: false, error: true, isLoading: false })
      }
    },
    [setSave]
  )

  const logoutUser = useCallback(() => {
    context.setLoggedUser(undefined)
  }, [context.setLoggedUser])

  return {
    ...context,
    logoutUser,
    get: {
      getUser
    },
    save: {
      saveUser,
      success: save.success,
      error: save.error,
      isLoading: save.isLoading
    }
  }
}
