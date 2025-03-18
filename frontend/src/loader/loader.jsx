import PulseLoader  from "react-spinners/PulseLoader";

export default function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <PulseLoader  color="#2bbcff" size={20} speedMultiplier={0.75} />
        </div>
    );
}
