import { Component, OnInit } from '@angular/core';
import data from "../../assets/DB.json";

interface Part {
  item: string;
  pdf: string;
  materials: Material[];
}

interface Material {
  id: string;
  description: string;
  colorId: string;
  quantity: string;
  metric: string;
  cutSize: string;
}

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss'],
})
export class DemandComponent implements OnInit {
  showModal: boolean = false;
  partDetail: any;

  colorMapping: { [key: string]: string } = {
    '2': '#d8b4fe',
    '3': '#a855f7',
    '4': '#581c87',
    '6': '#365314',
    '8': '#a3e635',
    '10': '#fb923c',
    '11': '#082f49',
    '12': '#0369a1',
    '16': '#fb7185',
    '25': '#0f766e',
    '33': '#bef264',
  };

  constructor() {
    this.partDetail = '';
  }

  ngOnInit(): void {}

  findItemByItemProperty(
    items: Part[],
    itemProperty: string
  ): Part | undefined {
    return items.find((item) => item.item === itemProperty);
  }

  toggleModal(part: string) {
    this.partDetail = this.findItemByItemProperty(data, part);
    this.showModal = !this.showModal;
  }

  getBackgroundColor(colorId: string): string {
    return this.colorMapping[colorId] || '#ffffff'; // Default to white if colorId not found
  }

  openPdf(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
  }
}
