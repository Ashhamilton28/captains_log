const React = require('react')
const DefaultLayout = require('./layout/Default')

function Show(props) {
    const {log} = props
    return (
        <DefaultLayout title = 'Show Page'>
            
            <p>Captain {log.captainName} is sailing in {log.weather} weather in a boat that {log.isCarryingGoods ? ' is carrying goods' : 'is not carrying goods'}. The boat {log.anyBreakages ? ' has breakages':' does not have any breakages'}.
               </p>

        </DefaultLayout>
    )
}
module.exports = Show