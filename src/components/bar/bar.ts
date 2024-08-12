import Block from '../../core/Block';

interface IProps {
  type: 'primary' | 'link';
  label: string;
  onClick?: () => void;
}

export class Bar extends Block {
  constructor(props: IProps) {
    super(props);
  }

  protected init(): void {
    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    // const { type, label, page } = this.props;
    const { className, title } = this.props;
    return `
      <div class="button">
        <button class="${className}">
          ${title}
        </button>
      </div>

    `;
    // return `
    //         <button type="button" class="button button__${type}" ${page ? `page="${page}"` : ''}>
    //             ${label}
    //         </button>
    //     `;
  }
}
