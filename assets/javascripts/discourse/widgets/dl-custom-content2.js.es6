import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';
import RawHtml from 'discourse/widgets/raw-html';
import showModal from 'discourse/lib/show-modal';
import { cook } from 'discourse/lib/text';

export default createWidget('dl-custom-content2', {
    tagName: 'div.dl-custom-content2.widget-container',
    buildKey: (attrs) => 'dl-custom-content2',

    html(attrs) {
        return h('div', { innerHTML: Discourse.SiteSettings.dl_custom_content2 });
    },
});
