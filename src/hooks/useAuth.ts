import useSWR from "swr";

// import { signIn, signOut, authCheckState, AuthState } from "../store/authSlice";
import { signIn } from "./api/authApis";

// export default function useAuth() {
//   const dispatch = useDispatch();
//   const auth = useSelector<RootState, AuthState>((state) => state.auth);

//   const onAuth = useCallback(
//     (email: string, password: string) => dispatch(signIn(email, password)),
//     [dispatch]
//   );
//   const onLogout = useCallback(() => dispatch(signOut()), [dispatch]);
//   const onAuthCheck = useCallback(() => dispatch(authCheckState()), [dispatch]);

//   return {
//     isAuth: auth.isAuth,
//     error: auth.error,
//     isLoading: auth.isLoading,
//     onAuth,
//     onLogout,
//     onAuthCheck,
//   };
// }

export default function useAuth(email: string, password: string) {
  const { data, error, isLoading, mutate } = useSWR(`/api/user`, () => {
    signIn(email, password);
  });

  return {
    userInfo: data,
    isLoading,
    error,
    mutate,
  };
}
