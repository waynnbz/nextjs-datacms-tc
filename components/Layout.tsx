import {CommonRecord} from 'lib/graphql';
import {PropsWithChildren} from 'react';
import Theme from 'components/Theme';

/**
 * App layout component
 */
export default function Layout({children, ...common}: PropsWithChildren<CommonRecord>) {
    return <div
        className={`text-center flex flex-col justify-center items-center bg-white text-black`}>
        <Theme {...common}/>
        {children}
    </div>
}
