
// src/hooks/useUser.ts
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import AuthService from "@/modules/auth/services/auth.service";
import { useNavigate } from "react-router";
import { routeNames } from "@/router/routes-names";
import type { IUser } from "@/models/user.model";
import type { AppDispatch, RootState } from "@/redux/store";
import { setUser } from "@/redux/user.slice";

export function useUser() {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  const fetchUser = useCallback(
    async (signal?: AbortSignal): Promise<IUser> => {

      try {

        const response = await AuthService.getUser(signal)
        dispatch(setUser(response))
        return response

      } catch (err: any) {

        if (err.name === "CanceledError" || err.name === "AbortError") {
          return Promise.reject(err)
        }

        console.error("Error fetching user:", err)

        navigate(routeNames.initPage, { replace: true })

        throw err
      }

    },
    [dispatch, navigate]
  )

  return { user, fetchUser }
}