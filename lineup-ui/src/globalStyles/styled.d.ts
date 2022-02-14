import 'styled-components';
import { ThemeType } from './colors';

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}
