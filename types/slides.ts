type SlideConfig =  {
  initialSlide: number,
  slidePrefix: string;
}

type SlideChangeCallbackFunction = (behavior?: ScrollBehavior) => void
type SlideChangeFunction = (callback: SlideChangeCallbackFunction) => void

export {
  SlideConfig,
  SlideChangeCallbackFunction,
  SlideChangeFunction
}