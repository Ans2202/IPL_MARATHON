import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../Service/ApiService";

const PostPlayer = () => {
    const [player, setPlayer] = useState({ playerId: 0, playerName: '', teamId: 0, role: '', age: 0, matchesPlayed: 0 });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onChange = (e) => {
        setPlayer({ ...player, [e.target.id]: e.target.value });
    }

    const createPlayer = async () => {
        try {
            setLoading(true);
            const response = await addPlayer(player);
            if (response.error) {
                throw new Error(response.error.message);
            }
            setLoading(false);
            console.log('Added the player : ' + response);
            navigate('/');
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const validate = (e) => {
        e.preventDefault();

        if (player.playerId === '') alert("Id is Mandatory");
        else if (player.playerName === '') alert("Name is Mandatory");
        else if (player.teamId === '') alert("Team Id is Mandatory");
        else if (player.role === '') alert("Role is Mandatory");
        else if (player.age === '') alert("Age is Mandatory");
        else if (player.matchesPlayed === '') alert("Matches Played is Mandatory");
        else {
            console.log("Form submitted");
            createPlayer();
        }
    }

    return (
        <>
            {loading && <h1 style={styles.loading}>Loading...</h1>}
            {error && <h1 style={styles.error}>{error.message}</h1>}
            <h1 style={styles.title}>Add a new Player</h1>
            <form className='form-group' onSubmit={validate} style={styles.form}>
                <div style={styles.formGroup}>
                    Id:
                    <input
                        className='form-control'
                        value={player.playerId}
                        onChange={onChange}
                        type='text'
                        id='playerId'
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    Name:
                    <input
                        className='form-control'
                        value={player.playerName}
                        onChange={onChange}
                        type='text'
                        id='playerName'
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    Team Id:
                    <input
                        className='form-control'
                        value={player.teamId}
                        onChange={onChange}
                        type='number'
                        id='teamId'
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    Role:
                    <input
                        className='form-control'
                        value={player.role}
                        onChange={onChange}
                        type='text'
                        id='role'
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    Age:
                    <input
                        className='form-control'
                        value={player.age}
                        onChange={onChange}
                        type='number'
                        id='age'
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    Matches Played:
                    <input
                        className='form-control'
                        value={player.matchesPlayed}
                        onChange={onChange}
                        type='number'
                        id='matchesPlayed'
                        style={styles.input}
                    />
                </div>
                <button className='btn btn-primary m-2 p-3' type='submit' style={styles.button}>
                    Add new Player
                </button>
            </form>
        </>
    );
}

const styles = {
    title: {
        textAlign: 'center',
        margin: '20px 0',
        color: '#333'
    },
    form: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
    },
    formGroup: {
        marginBottom: '15px'
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ddd'
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer'
    },
    loading: {
        textAlign: 'center',
        color: '#007bff'
    },
    error: {
        textAlign: 'center',
        color: 'red'
    }
};

export default PostPlayer;
