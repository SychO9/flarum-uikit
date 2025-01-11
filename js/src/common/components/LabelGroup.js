import Component from 'flarum/common/Component';

export default class LabelGroup extends Component {
  view(vnode) {
    let className = ['UiKit-LabelGroup'];

    if (this.attrs.className) className.push(this.attrs.className);

    return <span className={className.join(' ')}>{vnode.children}</span>;
  }
}
