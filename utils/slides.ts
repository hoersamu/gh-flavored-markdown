import {
  SlideChangeCallbackFunction,
  SlideChangeFunction,
} from '@/types/slides';
import { PropType, ComponentObjectPropsOptions } from 'vue';

export const SlideProp: ComponentObjectPropsOptions = {
  nextSlide: {
    type: Function as PropType<SlideChangeFunction>,
    default: (callback: SlideChangeCallbackFunction) => callback(),
  },
  previousSlide: {
    type: Function as PropType<SlideChangeFunction>,
    default: (callback: SlideChangeCallbackFunction) => callback(),
  },
};
