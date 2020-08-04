import React from 'react'

function changeWindowBackground() {
    const hex = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0);
    document.body.style.backgroundColor = hex;
}

// setInterval(changeWindowBackground, 3000);

class B extends React.Component {
    state = {
        b: 2
    }

    componentDidMount() {
        window.addEventListener('resize', changeWindowBackground)
        console.log('componentDidMount', JSON.stringify(this.state))
    }


    componentDidUpdate(){
        console.log("componentDidUpdate", JSON.stringify(this.state))
    }

    componentWillUpdate() {
        console.log('componentWillUpdate', JSON.stringify(this.state))
    }

    componentWillMount() {
        console.log('componentWillMount', JSON.stringify(this.state))
    }

    componentWillUnmount() {
        // window.removeEventListener('resize', changeWindowBackground)
        console.log('componentWillUnmount', JSON.stringify(this.state))
    }

    componentDidCatch() {
        console.log('componentDidCatch', JSON.stringify(this.state))
    }

    render() {
        return(
            <div style={{ background: 'orange', padding: 32 }}>
                <button onClick={() => {
                    console.log('onClick, before', JSON.stringify(this.state));
                    this.setState(
                        x => ({ b: x.b + 1 }),
                        () => console.log('onClick, callback', JSON.stringify(this.state))
                    );
                    console.log('onClick, after', JSON.stringify(this.state));
                }}>setState</button>
            </div>
        )
    }
}

export default B