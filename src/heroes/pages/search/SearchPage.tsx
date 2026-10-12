import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../hero/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Universo de SuperHéroes"
        description="Descubre, explora y gestiona tus SuperHéroes favoritos"
      />

      <CustomBreadcrumbs />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
