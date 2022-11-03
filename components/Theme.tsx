/**
 * Configures fonts and colors for the app
 */
import {CommonRecord} from 'lib/graphql';
import {decode} from 'html-entities';
import {Frank_Ruhl_Libre, Mulish} from '@next/font/google'
import localFont from '@next/font/local';

const frankRuhlLibre = Frank_Ruhl_Libre({weight: '300', subsets: ["latin-ext"]})
const helveticaDisplayBold = localFont({
    src: '../app/fonts/HelveticaNowDisplay-Bold.woff2',
    weight: '700',
});
const helveticaDisplayMedium = localFont({
    src: '../app/fonts/HelveticaNowDisplay-Medium.woff2',
    weight: '500',
});
const helveticaDisplayRegular = localFont({
    src: '../app/fonts/HelveticaNowDisplay-Regular.woff2',
    weight: '400',
});
const helveticaDisplayLight = localFont({
    src: '../app/fonts/HelveticaNowDisplay-Light.woff2',
    weight: '300',
});

const mulish = Mulish({weight: 'variable', subsets: ['latin']})

export default function Theme({light1, light2, grace, love, peace, strength, wisdom}: CommonRecord) {
    return <style dangerouslySetInnerHTML={{
        __html: `
        :root {
            --color-light1: ${light1!.hex};
            --color-light2: ${light2!.hex};
            --color-light2-50: rgba(${light2!.red},${light2!.green},${light2!.blue},0.5);
            --color-grace: ${grace!.hex};
            --color-love: ${love!.hex};
            --color-peace: ${peace!.hex};
            --color-strength: ${strength!.hex};
            --color-wisdom: ${wisdom!.hex};
            --frank-ruhl-libre: ${decode(frankRuhlLibre.style.fontFamily)};
            --helvetica-now-bold: ${decode(helveticaDisplayBold.style.fontFamily)};
            --helvetica-now: ${decode(helveticaDisplayRegular.style.fontFamily)};
            --helvetica-now-medium: ${decode(helveticaDisplayMedium.style.fontFamily)};
            --helvetica-now-light: ${decode(helveticaDisplayLight.style.fontFamily)};
            --mulish: ${decode(mulish.style.fontFamily)};
        }
        `
    }}/>

}
