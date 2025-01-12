import app from 'flarum/forum/app';
import Search, { type SearchAttrs, SearchSource } from 'flarum/forum/components/Search';
import ItemList from 'flarum/common/utils/ItemList';
import DiscussionSearchSource from './DiscussionSearchSource';
import type Discussion from 'flarum/common/models/Discussion';
import extractText from 'flarum/common/utils/extractText';
import classList from 'flarum/common/utils/classList';
import Input from 'flarum/common/components/Input';

export interface DiscussionSearchAttrs extends SearchAttrs {
  onSelect: (discussion: Discussion) => void;
  ignore: string;
}

export default class DiscussionSearch<T extends DiscussionSearchAttrs> extends Search<T> {
  view() {
    const currentSearch = this.searchState.getInitialSearch();

    // Initialize search sources in the view rather than the constructor so
    // that we have access to app.forum.
    if (!this.sources) this.sources = this.sourceItems().toArray();

    // Hide the search view if no sources were loaded
    if (!this.sources.length) return <div></div>;

    const searchLabel = extractText(app.translator.trans('core.forum.header.search_placeholder'));

    const isActive = !!currentSearch;
    const shouldShowResults = !!(this.searchState.getValue() && this.hasFocus);
    const shouldShowClearButton = !!(!this.loadingSources && this.searchState.getValue());

    return (
      <div
        role="search"
        aria-label={app.translator.trans('core.forum.header.search_role_label')}
        className={classList('Search', 'UiKit-Search', {
          open: this.searchState.getValue() && this.hasFocus,
          focused: this.hasFocus,
          active: isActive,
          loading: !!this.loadingSources,
        })}
      >
        <Input
          aria-label={searchLabel}
          className="Search-input"
          type="search"
          placeholder={searchLabel}
          value={this.searchState.getValue()}
          onchange={(value: string) => this.searchState.setValue(value)}
          clearable={shouldShowClearButton}
          loading={this.loadingSources}
          inputAttrs={{
            onfocus: () => (this.hasFocus = true),
            onblur: () => (this.hasFocus = false),
          }}
        />
        <ul
          className="Dropdown-menu Search-results"
          aria-hidden={!shouldShowResults || undefined}
          aria-live={shouldShowResults ? 'polite' : undefined}
        >
          {shouldShowResults && this.sources.map((source) => source.view(this.searchState.getValue()))}
        </ul>
      </div>
    );
  }

  sourceItems() {
    const items = new ItemList<SearchSource>();

    items.add(
      'discussions',
      new DiscussionSearchSource((discussion: Discussion) => {
        this.searchState.setValue(discussion.title());
        this.attrs.onSelect(discussion);
      }, this.attrs.ignore)
    );

    return items;
  }
}
