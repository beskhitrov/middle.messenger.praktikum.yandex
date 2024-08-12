import Block from '../../core/Block';
import { navigate } from '../../core/navigate';
import * as validators from '../../utils/validators';

export class Foo extends Block {
  constructor() {
    super({
      validate: {
        login: validators.login,
      },
      onLogin: (event) => {
        event.preventDefault();
        const login = this.refs.login.value();
        const password = this.refs.password.value();
        // this.setProps({a: 1})

        if (!login) {
          return;
        }

        console.log({
          login,
          password,
        });
        navigate('list');
      },
    });
  }
  protected render(): string {
    return `
            <div>
                <p>Hello, world!</p>
                {{{ Bar title="Hello" className="button__color" }}}
            </div>
            `;
    // return(`
    //     <div class="container">
    //         {{#> FormAuth}}
    //             {{{ InputField label="Login" ref="login" validate=validate.login }}}
    //             {{{ InputField label="Password" ref="password" }}}
    //             {{{ Button label="Sign in" type="primary" page="list" onClick=onLogin }}}
    //             {{{ Button label="Sign up" type="link" }}}
    //         {{/FormAuth}}
    //     </div>
    // `)
  }
}
