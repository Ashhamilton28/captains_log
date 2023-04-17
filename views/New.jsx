const React = require('react');
const DefaultLayout = require('./layout/Default')

function New(){
    return(
        <DefaultLayout>
            <h1>New Log Entry</h1>

            <form action='/logs' method="POST">

                Captain Name:<input type="text" name ="captainName"/>
                <br/>

                Weather: <input type="text" name="weather" />
                <br/>

                Is carrying goods?: <input type="checkbox" name ="isCarryingGoods"
                />
                 <br/>

                 Any breakages?: <input type="checkbox" name ="anyBreakages"
                />
                 <br/>
                 
                 <input type="submit" value="Add a log entry" />

            </form>
        </DefaultLayout>
    )
}

module.exports = New