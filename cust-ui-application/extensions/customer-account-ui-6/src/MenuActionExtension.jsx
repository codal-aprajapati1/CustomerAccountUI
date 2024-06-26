import { Button, reactExtension, useApi } from '@shopify/ui-extensions-react/customer-account';

export default reactExtension('customer-account.order-index.block.render', () => (
  <MenuActionExtension />
));

function MenuActionExtension() {
  const { i18n } = useApi();
  return <Button to="extension:/">{i18n.translate('menuItemButton')}</Button>;
}
