import Component from 'flarum/Component';

export default class LabelGroup extends Component {
  view(vnode) {
    return (
      <span className="UiKit-LabelGroup">
        {vnode.children}
      </span>
    );
  }
}
