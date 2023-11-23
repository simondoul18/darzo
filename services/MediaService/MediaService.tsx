export default class MediaService {

    allowedImageMime: any = [
        'jpeg', 'jpg', 'png', 'svg', 'gif'
    ];

    onlyImages(file: File): File | null {
        let extension = file.name.split('.').pop();

        if (this.allowedImageMime.includes(extension)) {
            return file;
        }


        return null;
    }
}