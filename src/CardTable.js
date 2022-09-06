const CardTable = () => {
    return (
        <table>
            <tr>
                <td className="outer-card"><td className="inner-card">0</td></td>
                <td className="outer-card"><td className="inner-card">1/2</td></td>
                <td className="outer-card"><td className="inner-card">1</td></td>
                <td className="outer-card"><td className="inner-card">2</td></td>
                <td className="outer-card"><td className="inner-card">3</td></td>
            </tr>
            <tr>
                <td className="outer-card"><td className="inner-card">5</td></td>
                <td className="outer-card"><td className="inner-card">8</td></td>
                <td className="outer-card"><td className="inner-card">13</td></td>
                <td className="outer-card"><td className="inner-card">20</td></td>
                <td className="outer-card"><td className="inner-card">40</td></td>
            </tr>
            <tr>
                <td><td className="inner-card empty">0</td></td>
                <td className="outer-card"><td className="inner-card">100</td></td>
                <td className="outer-card"><td className="inner-card">?</td></td>
                <td className="outer-card"><td className="inner-card">&#x2615;</td></td>
                <td><td className="inner-card empty">0</td></td>
            </tr>
        </table>
    );
}

export default CardTable;