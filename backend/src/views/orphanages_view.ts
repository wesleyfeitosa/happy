import Orphanage from '../models/Orphanage';
import imagesView from './images_view';

interface IOrphanageReturn extends Omit<Orphanage, 'images'> {
  images: {
    id: number;
    url: string;
  }[];
}

export default {
  render(orphanage: Orphanage): IOrphanageReturn {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanages: Orphanage[]): IOrphanageReturn[] {
    return orphanages.map(orphanage => this.render(orphanage));
  },
};
