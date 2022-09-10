/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Tooltip, Button } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

import ComponentCard from '../../components/ComponentCard';

interface PropsType {
  id: number;
  item: {
    placement: string;
    text: string;
  }
}

const TooltipItem = (props : PropsType) => {
  const { item, id } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <span>
      <Button className="me-1" color="outline-primary" id={`Tooltip-${id}`}>
        {item.text}
      </Button>
      <Tooltip
        placement={item.placement as any}
        isOpen={tooltipOpen}
        target={`Tooltip-${id}`}
        toggle={toggle}
      >
        Tooltip Content!
      </Tooltip>
    </span>
  );
};

const TooltipComponent = () => {
  return (
    <div>
      <BreadCrumbs />
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <ComponentCard title="Tooltip">
        <>
          {[
            {
              placement: 'top',
              text: 'Top',
            },
            {
              placement: 'bottom',
              text: 'Bottom',
            },
            {
              placement: 'left',
              text: 'Left',
            },
            {
              placement: 'right',
              text: 'Right',
            },
          ].map((tooltip, i) => {
            return <TooltipItem key={tooltip.placement} item={tooltip} id={i} />;
          })}
        </>
      </ComponentCard>
      {/* -------------------------------------------------------------------------------- */}
      {/* Row */}
      {/* -------------------------------------------------------------------------------- */}
    </div>
  );
};

export default TooltipComponent;
