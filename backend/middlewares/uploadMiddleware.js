//AI
import multer from "multer";
import path from "path";

// Configuración de almacenamiento en DISCO
const storage = multer.diskStorage({
	destination: "uploads/",
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		const ext = path.extname(file.originalname);
		cb(null, file.fieldname + "-" + uniqueSuffix + ext);
	},
});

const fileFilter = (req, file, cb) => {
	const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
	if (allowedTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(new Error("Formato no válido"), false);
	}
};

const upload = multer({
	storage: storage, // Usamos la config de disco
	fileFilter: fileFilter,
	limits: { fileSize: 5 * 1024 * 1024 },
});

export default upload;
