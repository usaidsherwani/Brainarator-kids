import { InjectedFormProps } from 'redux-form';

declare namespace IReduxForm {
  export interface IGenericProps extends InjectedFormProps {}
}

export { IReduxForm };
