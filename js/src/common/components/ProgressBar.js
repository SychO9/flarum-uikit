import Component from 'flarum/Component';

export default class ProgressBar extends Component {
  view() {
    let className = 'UiKit-ProgressBar ' + (this.attrs.className || '');

    if (this.attrs.mini) className += 'UiKit-ProgressBar--mini';

    return (
      <div className={className}>
        <div className="UiKit-ProgressBar-bar" style={{ width: `${this.getProgress()}%` }} />
      </div>
    );
  }

  getProgress() {
    return this.attrs.progress;
  }
}
