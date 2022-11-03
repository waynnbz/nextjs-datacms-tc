import {ButtonRecord, FaqQuestionRecord, WordCarouselRecord} from "lib/graphql";
import styles from './faq-question.module.css';
import {Image, StructuredText, StructuredTextDocument, StructuredTextGraphQlResponse} from "react-datocms";
import cn from 'clsx'

/**
 * FAQ Question component
 */
export default function FaqQuestion({question, answer}: FaqQuestionRecord) {
    return (
        <details className={cn("my-4 p-4 rounded-3xl w-full text-left light2-50 relative", styles.container)}>
            <summary className="font-helveticaNowBold text-2xl list-none relative">{question}</summary>
            <StructuredText data={answer as any}/>
        </details>
    )
}
