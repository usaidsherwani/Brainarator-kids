// #region global imports
import React from 'react';
import { NextPage } from 'next';
// #endregion global imports

// #region local imports
import { BlocklyWorkspace } from 'client/components/blockly';
// import { PageLayout } from 'client/components/app/pageLayout';
// #endregion local imports
// import 'public/static/css/style'
// #region interfaces imports
// import { ReduxNextPageContext } from 'client/interfaces';
// #endregion interfaces imports

const BlocklyPage: NextPage<any> = props => {
    return (
        // <PageLayout>
            <BlocklyWorkspace {...props} />
        // {/* </PageLayout> */}
    );
};

export default BlocklyPage;
