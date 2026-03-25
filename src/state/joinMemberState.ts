import { create } from 'zustand';
import { InputStatus, type InputStatusType } from '../models/inputStatus.ts';

type JoinMemberState = {
  activeTabIndex: number;
  nickname: string;
  nicknameStatus: InputStatusType;
  birthday: Date | null;
  gender: number;
  serviceAgree: boolean;
  privateAgree: boolean;
  marketingAgree: boolean;
  selectedFairs: number[];
  setActiveTabIndex: (index: number) => void;
  nextTab: (maxIndex: number) => void;
  prevTab: () => void;
  setNickName: (v: string) => void;
  setNicknameStatus: (v: InputStatusType) => void;
  setBirthday: (d: Date | null) => void;
  setGender: (g: number) => void;
  setServiceAgree: (v: boolean) => void;
  setPrivateAgree: (v: boolean) => void;
  setMarketingAgree: (v: boolean) => void;
  setAllAgreements: (v: boolean) => void;
  toggleFairSelection: (index: number) => void;
  resetJoinMember: () => void;
};

const initialState = {
  activeTabIndex: 0,
  nickname: '',
  nicknameStatus: InputStatus.default,
  birthday: null,
  gender: -1,
  serviceAgree: false,
  privateAgree: false,
  marketingAgree: false,
  selectedFairs: [] as number[],
};

export const useJoinMemberStore = create<JoinMemberState>((set) => ({
  ...initialState,
  setActiveTabIndex: (index: number) => set({ activeTabIndex: index }),
  nextTab: (maxIndex: number) =>
    set((state) => ({
      activeTabIndex: Math.min(state.activeTabIndex + 1, maxIndex),
    })),
  prevTab: () =>
    set((state) => ({
      activeTabIndex: state.activeTabIndex === 0 ? 0 : state.activeTabIndex - 1,
    })),
  setNickName: (v: string) => set({ nickname: v }),
  setNicknameStatus: (v: InputStatusType) => set({ nicknameStatus: v }),
  setBirthday: (d: Date | null) => set({ birthday: d }),
  setGender: (g: number) => set({ gender: g }),
  setServiceAgree: (v: boolean) => set({ serviceAgree: v }),
  setPrivateAgree: (v: boolean) => set({ privateAgree: v }),
  setMarketingAgree: (v: boolean) => set({ marketingAgree: v }),
  setAllAgreements: (v: boolean) =>
    set({
      serviceAgree: v,
      privateAgree: v,
      marketingAgree: v,
    }),
  toggleFairSelection: (index: number) =>
    set((state) => ({
      selectedFairs: state.selectedFairs.includes(index)
        ? state.selectedFairs.filter((item) => item !== index)
        : [...state.selectedFairs, index],
    })),
  resetJoinMember: () => set(initialState),
}));
