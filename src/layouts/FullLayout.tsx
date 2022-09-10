import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import Header from './header/Header';
import Sidebar from './sidebars/vertical/Sidebar';
import HorizontalHeader from './header/HorizontalHeader';
import HorizontalSidebar from './sidebars/horizontal/HorizontalSidebar';

interface StateType  {
  customizer: {
    customizerSidebar : string,
    isMiniSidebar: string,
    isMobileSidebar: string,
    isTopbarFixed: string,
    isLayoutHorizontal : string,
    isSidebarFixed: string
  }
}

const FullLayout = () => {
  const customizerToggle = useSelector((state : StateType) => state.customizer.customizerSidebar);
  const toggleMiniSidebar = useSelector((state : StateType ) => state.customizer.isMiniSidebar);
  const showMobileSidebar = useSelector((state : StateType) => state.customizer.isMobileSidebar);
  const topbarFixed = useSelector((state : StateType) => state.customizer.isTopbarFixed);
  const LayoutHorizontal = useSelector((state : StateType) => state.customizer.isLayoutHorizontal);
  const isFixedSidebar = useSelector((state : StateType) => state.customizer.isSidebarFixed);
  return (
    <main>
      <div
        className={`pageWrapper d-md-block d-lg-flex ${toggleMiniSidebar ? 'isMiniSidebar' : ''}`}
      >
        {/******** Sidebar **********/}
        {LayoutHorizontal ? (
          ''
        ) : (
          <aside className={`sidebarArea ${showMobileSidebar ? 'showSidebar' : ''}`}>
            <Sidebar />
          </aside>
        )}
        {/********Content Area**********/}

        <div className={`contentArea ${topbarFixed ? 'fixedTopbar' : ''}`}>
          {/********header**********/}
          {LayoutHorizontal ? <HorizontalHeader /> : <Header />}
          {LayoutHorizontal ? <HorizontalSidebar /> : ''}
          {/********Middle Content**********/}
          <Container fluid className="p-4 boxContainer">
            <div className={isFixedSidebar && LayoutHorizontal ? 'HsidebarFixed' : ''}>
              <Outlet />
            </div>            
            {showMobileSidebar || customizerToggle ? <div className="sidebarOverlay" /> : ''}
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
