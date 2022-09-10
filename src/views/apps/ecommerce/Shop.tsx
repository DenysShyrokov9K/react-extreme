import { Card, CardBody } from 'reactstrap';
import TwoColumn from '../../../components/twoColumn/TwoColumn';
import ShopListing from '../../../components/apps/ecommerce/ShopListing';
import EcoSidebar from '../../../components/apps/ecommerce/EcoSidebar';

const Shop = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn rightContent={<ShopListing /> as any} leftContent={<EcoSidebar /> as any} />
      </CardBody>
    </Card>
  );
};

export default Shop;
