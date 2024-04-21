import {faqs} from './../../assets/data/faqs';
import FaqItem from './FaqItem';

const Faqlist = () => {
    return (
        <ul>
            {faqs.map((item, index)=> <FaqItem item={item} key={index} />)}
        </ul>
    )
}

export default Faqlist;