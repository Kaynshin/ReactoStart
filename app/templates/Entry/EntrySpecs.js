/* global jest */
/* global describe */
/* global it */

// --- components ---
import Entry from './Entry';

// --- helpers ---
import matchComponentSnapshot from '../../helpers/matchComponentSnapshot';

const matchFooterSnapshotComponent = matchComponentSnapshot(Entry);

describe('Entry container', () => {
  it('should render Entry', () => {
    matchFooterSnapshotComponent();
  });
});
