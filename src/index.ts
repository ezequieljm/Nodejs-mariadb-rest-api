import app from "./app";
import { PORT } from "./config";

app.listen(PORT, function () {
    console.log(`Server on port ${PORT}`);
});
