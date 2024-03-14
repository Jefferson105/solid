import { RefObject } from 'react';
import * as CSS from 'csstype';

export interface IContainerStyle {
    bg?: string;
    bgGradient?: string;
    bgImage?: string;
    bgSize?: string;
    bgImageOpacity?: number;
    bgRaw?: string;
    bgPos?: string;
    bgRepeat?: string;
    display?: CSS.Property.Display;
    dir?: CSS.Property.FlexDirection;
    alignSelf?: CSS.Property.AlignSelf;
    position?: CSS.Property.Position;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    justify?: CSS.Property.JustifyContent;
    align?: CSS.Property.AlignItems;
    width?: string;
    maxWidth?: string;
    minWidth?: string;
    height?: string;
    margin?: string;
    padding?: string;
    border?: string;
    borderB?: string;
    radius?: string;
    gap?: string;
    flex?: string;
    wrap?: CSS.Property.FlexWrap;
    maxHeight?: string;
    minHeight?: string;
    opacity?: number;
    overflow?: string;
    ref?: RefObject<unknown>;
    zIndex?: number;
    cursor?: string;
    boxShadow?: string;
    transition?: string;
    color?: string;
    gridCols?: string;
    //hover?: RuleSet<object>;
}

export interface ITypographStyle {
    size?: string;
    align?: string;
    color?: string;
    margin?: string;
    decoration?: string;
    family?: string;
}
