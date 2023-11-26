import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface appState {
    menuOpen: boolean,
    loginModalOpen: boolean,
    showNotification: boolean
    notificationMessage: string
    notificationType: "success" | "error" | "info"
}

const initialState: appState = {
    menuOpen: false,
    loginModalOpen: false,
    showNotification: false,
    notificationMessage: "Success",
    notificationType: "success"
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggle: (state) => {
            state.menuOpen = !state.menuOpen
            localStorage.setItem("menuOpen", JSON.stringify(state.menuOpen))
        },
        toggleLoginModal: (state) => {
            state.loginModalOpen = !state.loginModalOpen
        },
        showNotification: (state) => {
            state.showNotification = true
        },
        hideNotification: (state) => {
            state.showNotification = false
        },
        setNotificationMessage: (state, action: PayloadAction<string>) => {
            state.notificationMessage = action.payload
        },
        setNotificationType: (state, action: PayloadAction<"success" | "error" | "info">) => {
            state.notificationType = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {toggle, showNotification, hideNotification, setNotificationType, setNotificationMessage, toggleLoginModal} = appSlice.actions

export default appSlice.reducer
