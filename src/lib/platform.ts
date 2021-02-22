export enum Platform {
  ANDROID = 'android',
  IOS = 'ios',
  VKCOM = 'vkcom'
}

export const ANDROID = Platform.ANDROID
export const IOS = Platform.IOS
export const VKCOM = Platform.VKCOM

export type PlatformType = Platform.ANDROID | Platform.IOS | Platform.VKCOM

export function platform (): PlatformType {
  return this.VkPlatform === 'ios' ? IOS : ANDROID
}
