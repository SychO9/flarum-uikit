import type Mithril from 'mithril';
import { SearchSource } from 'flarum/forum/components/Search';
import type Discussion from 'flarum/common/models/Discussion';
export default class DiscussionSearchSource implements SearchSource {
    protected results: Map<string, unknown[]>;
    protected onSelect: (discussion: Discussion) => void;
    protected ignore: string;
    constructor(onSelect: (discussion: Discussion) => void, ignore: string);
    search(query: string): Promise<void>;
    view(query: string): Array<Mithril.Vnode>;
}
