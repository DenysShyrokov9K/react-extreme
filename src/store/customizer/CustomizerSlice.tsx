import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topbarBg: 'primary',
  customizerSidebar: false,
  isRTL: false,
  isDark: false,
  isMiniSidebar: false,
  sidebarBg: 'white',
  isTopbarFixed: true,
  isMobileSidebar: false,
  isSidebarFixed: true,
  isLayoutHorizontal: false,
  isInnerRightPart: false, // this is for the three column layout right part show hide in table & mobile
};

interface StateType {
  topbarBg: string;
  customizerSidebar: boolean;
  isRTL: boolean;
  isDark: boolean;
  isMiniSidebar: boolean;
  sidebarBg: string;
  isTopbarFixed: boolean;
  isMobileSidebar: boolean;
  isSidebarFixed: boolean;
  isLayoutHorizontal: boolean;
  isInnerRightPart: boolean;
}

export const CustomizerSlice = createSlice({
  name: 'customizer',
  initialState,
  reducers: {
    ChangeTopbarColor: (state : StateType, action) => {
      state.topbarBg = action.payload;
    },
    ToggleCustomizer: (state : StateType) => {
      state.customizerSidebar = !state.customizerSidebar;
    },
    ChangeDirection: (state : StateType, action) => {
      state.isRTL = action.payload;
    },
    ChangeDarkMode: (state : StateType, action) => {
      state.isDark = action.payload;
    },
    ToggleMiniSidebar: (state) => {
      state.isMiniSidebar = !state.isMiniSidebar;
    },
    ChangeSidebarColor: (state : StateType, action) => {
      state.sidebarBg = action.payload;
    },
    ToggleTopbar: (state : StateType, action) => {
      state.isTopbarFixed = action.payload;
    },
    ToggleMobileSidebar: (state : StateType) => {
      state.isMobileSidebar = !state.isMobileSidebar;
    },
    FixedSidebar: (state : StateType) => {
      state.isSidebarFixed = !state.isSidebarFixed;
    },
    ToggleHorizontal: (state : StateType) => {
      state.isLayoutHorizontal = !state.isLayoutHorizontal;
    },
    ToggleInnerRightPart: (state : StateType) => {
      state.isInnerRightPart = !state.isInnerRightPart;
    },
  },
});

export const {
  ChangeTopbarColor,
  ToggleCustomizer,
  ChangeDirection,
  ChangeDarkMode,
  ToggleMiniSidebar,
  ChangeSidebarColor,
  ToggleTopbar,
  ToggleMobileSidebar,
  FixedSidebar,
  ToggleHorizontal,
  ToggleInnerRightPart,
} = CustomizerSlice.actions;

export default CustomizerSlice.reducer;
