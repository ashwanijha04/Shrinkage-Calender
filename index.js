import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, MonthAgenda, Inject } from '@syncfusion/ej2-react-schedule';

import { extend } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';
import * as dataSource from './datasource.json';
/**
 * Schedule month agenda sample
 */
export class MonthAgendaView extends SampleBase {
  constructor() {
    super(...arguments);
    this.data = extend([], dataSource.fifaEventsData, null, true);
    this.boolVal = true;
  }
  onDataBound(args) {
    if (this.boolVal) {
      this.customFun();
      this.boolVal = false;
    }
  }
  onActionComplete(args) {
    if (args.requestType == "dateNavigste") {
      this.customFun();
    }
  }
  customFun() {
    var ele = document.querySelectorAll('.e-appointment-indicator');
    for (var i = 0; i < ele.length; i++) {
      ele[i].innerHTML = "16%";
    }
  }
  render() {
    return (<div className='schedule-control-section'>
      <div className='col-lg-12 control-section'>
        <div className='control-wrapper schedule-wrapper'>
          <ScheduleComponent width='100%' height='510px' dataBound={(this.onDataBound.bind(this))} selectedDate={new Date(2018, 5, 20)} actionComplete={(this.onActionComplete.bind(this))} eventSettings={{ dataSource: this.data }}>
            <ViewsDirective>
              <ViewDirective option='MonthAgenda' />
            </ViewsDirective>
            <Inject services={[MonthAgenda]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>);
  }
}

render(<MonthAgendaView />, document.getElementById('sample'));