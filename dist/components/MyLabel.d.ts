/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
    * Este es un mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Is el tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitaliza todo
     */
    allCaps?: boolean;
    /**
     * colores disponibles
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
       * color personalizado de la fuente
       */
    fontColor?: string;
    /**
     * color personalizado de la fuente
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;
