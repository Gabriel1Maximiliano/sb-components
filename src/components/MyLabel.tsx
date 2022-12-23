


import './mylabel.css'
//import { AllCaps } from '../stories/components/MyLabel.stories';

export interface Props {
   /**
   * Este es un mensaje a mostrar en la etiqueta
   */
  label:string;
   /**
   * Is el tamaño de la etiqueta
   */
  size:'normal'|'h1'|'h2'|'h3'
  /**
   * Capitaliza todo
   */
  allCaps?:boolean
  /**
   * colores disponibles
   */
  color?:'primary'|'secondary'|'tertiary'
/**
   * color personalizado de la fuente
   */
  fontColor?:string
  /**
   * color personalizado de la fuente
   */
  backgroundColor?:string
}
export const MyLabel = ({
  label='No label',
  size='normal',
  allCaps=false,
  color='primary',
  fontColor='',
  backgroundColor='transparent'
}:Props) => {
  return (
    <span className={`${ size } text-${ color }`} style={{ color:fontColor,backgroundColor }}>{allCaps? label.toUpperCase() : label }</span>
  )
}
