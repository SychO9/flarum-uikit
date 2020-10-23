import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';
import tagLabel from 'flarum/tags/helpers/tagLabel';
import tagIcon from 'flarum/tags/helpers/tagIcon';
import sortTags from 'flarum/tags/utils/sortTags';

export default class TagSelector extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.selected = this.attrs.selectedTags || [];
    this.tags = this.attrs.tags || app.store.all('tags');
    this.focused = false;

    if (this.attrs.excludedTags) {
      this.tags = this.tags.filter((tag) => !this.attrs.excludedTags.includes(tag) || this.attrs.selectedTags.includes(tag));
    }
  }

  view() {
    $(window).click(() => {
      this.focused = false;
      m.redraw();
    });

    return (
      <div className={"UiKit-TagSelector" + (this.focused ? ' open' : '')}>
        <input
          className="FormControl"
          onfocus={() => this.focused = true}
          onclick={(e) => e.stopPropagation()}
        />
        <div className="UiKit-TagSelector-selectedTags FormControl">
          {this.selected.map(tag => tagLabel(tag))}
        </div>
        <ul className="Dropdown-menu">
          {this.tags.map(tag => (
            <li className={"UiKit-TagSelector-item" + (this.isTagSelected(tag) ? ' UiKit-TagSelector-item--selected' : '')}>
              <a
                onclick={this.toggleTag.bind(this, tag)}>
                <div className="UiKit-TagSelector-item-icon">{tagIcon(tag)}</div>
                <div className="UiKit-TagSelector-item-content">
                  <div className="UiKit-TagSelector-item-name">{tag.name()}</div>
                  <div className="UiKit-TagSelector-item-description">{tag.description() || ''}</div>
                </div>
                {this.isTagSelected(tag) ? (
                  <div className="UiKit-TagSelector-item-check">{icon('fas fa-check')}</div>
                ) : ''}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  isTagSelected(tag) {
    return this.selected.indexOf(tag) !== -1;
  }

  toggleTag(tag, e) {
    e.stopPropagation();
    this.$('input').focus();

    if (this.isTagSelected(tag))
      this.selected = this.selected.filter(t => t !== tag);
    else
      this.selected.push(tag);

    if (this.attrs.onchange)
      this.attrs.onchange(this.selected);
  }
}
