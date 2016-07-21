import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { render } from 'react-dom';
import React from 'react';

import { Widgets } from '../imports/api/widgets/collection';
import { Widgets as WidgetsComponent } from '../imports/ui/components/Widgets';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

Meteor.startup(() => {
  render(<WidgetsComponent />, document.getElementById('app'));
});
