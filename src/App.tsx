import { FormProvider, useForm } from 'react-hook-form';
import { object, string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Root, TabPanel, TabsList, Tab } from './styled';
import { SingleUnit, MultipleUnit } from './components';
import TabsUnstyled from '@mui/base/TabsUnstyled';

function App() {
  type Inputs = {
    rem: string;
    px: string;
    pxs: string[];
    rems: string[];
    rootFontSize: string;
  };

  const schema = object({
    px: z.string().optional(),
    rem: z.string().optional(),
    pxs: z.array(string()).optional(),
    rems: z.array(string()).optional(),
    rootFontSize: z.string(),
  });

  const useFormMethods = useForm<Inputs>({
    defaultValues: { rem: '', px: '', rootFontSize: '16', pxs: [], rems: [] },
    resolver: zodResolver(schema),
  });

  return (
    <Root>
      <FormProvider {...useFormMethods}>
        <TabsUnstyled defaultValue={0}>
          <TabsList>
            <Tab>Single</Tab>
            <Tab>Multiple</Tab>
          </TabsList>
          <TabPanel value={0}>
            <SingleUnit />
          </TabPanel>
          <TabPanel value={1}>
            <MultipleUnit />
          </TabPanel>
        </TabsUnstyled>
      </FormProvider>
    </Root>
  );
}

export default App;
