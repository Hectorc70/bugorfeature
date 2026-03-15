
import type { IUser } from "@/models/user.model";
import { createSlice,type PayloadAction } from "@reduxjs/toolkit";


const initialState: IUser = {
  uuid: "",
  username: "",
  email: "",
  active: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,  reducers: {
    // Acción para actualizar el usuario completo
    setUser: (state, action: PayloadAction<IUser>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.uuid = action.payload.uuid;
    },
  },

});

export const { setUser} = userSlice.actions;
export default userSlice.reducer;
