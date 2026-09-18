export interface ContactLink {
  label: string;
  value: string;
  url: string;
  icon: 'email' | 'linkedin' | 'github';
  external?: boolean;
}
