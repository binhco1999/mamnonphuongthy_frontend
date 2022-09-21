import React from 'react';
    import { Button } from './components/Button/button';
import GlobalStyles from './components/GlobalStyles';
function App(): JSX.Element {
    return (
        <GlobalStyles>
            <div className="App">
                <Button />
            </div>
        </GlobalStyles>
    );
}

export default App;
    