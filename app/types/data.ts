export interface HeaderResponse {
  title: string;
  subtitle: string;
  navigation: { href: string; label: string }[];
}

export interface FooterResponse {
  company: string;
  city: string;
  email: string;
  address: string;
}
